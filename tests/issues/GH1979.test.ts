import {
  Entity,
  MikroORM,
  PrimaryKey,
  Property,
  Filter,
  Index,
} from '@mikro-orm/core';
import { AbstractSqlDriver, EntityManager } from '@mikro-orm/knex';

@Entity({ discriminatorColumn: 'type', abstract: true })
@Filter({
  name: 'isActive',
  cond: { benefitStatus: 'A', createdAt: { $lte: new Date() } },
})
abstract class Benefit {

  @PrimaryKey()
  id!: number;

  @Property()
  benefitStatus!: string;

  @Index()
  @Property({ columnType: 'timestamp' })
  createdAt: Date = new Date();

  @Property()
  type!: string;

}

@Entity({
  discriminatorValue: 'Profit',
})
@Entity()
class Profit extends Benefit {

  @Property()
  title!: string;

}

describe('GH issue 1979', () => {
  let orm: MikroORM<AbstractSqlDriver>;

  let em: EntityManager;

  beforeEach(async () => {
    orm = await MikroORM.init({
      entities: [Benefit, Profit],
      dbName: `mikro_orm_test_gh_1979`,
      type: 'postgresql',
      debug: true,
    });

    await orm.getSchemaGenerator().ensureDatabase();
    await orm.getSchemaGenerator().dropSchema();
    await orm.getSchemaGenerator().createSchema();

    em = orm.em.fork();

    const now = Date.now();

    const ACTIVE_PROFIT_1 = new Profit();
    ACTIVE_PROFIT_1.id = 1;
    ACTIVE_PROFIT_1.benefitStatus = 'A';
    ACTIVE_PROFIT_1.createdAt = new Date(now - 320000);
    ACTIVE_PROFIT_1.title = 'PROFIT_A';
    const ACTIVE_PROFIT_2 = new Profit();
    ACTIVE_PROFIT_2.id = 2;
    ACTIVE_PROFIT_2.benefitStatus = 'A';
    ACTIVE_PROFIT_2.createdAt = new Date(now - 320000);
    ACTIVE_PROFIT_1.title = 'PROFIT_B';
    const INACTIVE_PROFIT = new Profit();
    INACTIVE_PROFIT.id = 3;
    INACTIVE_PROFIT.benefitStatus = 'B';
    INACTIVE_PROFIT.createdAt = new Date(now + 320000);
    ACTIVE_PROFIT_1.title = 'PROFIT_C';

    await em.persistAndFlush(ACTIVE_PROFIT_1);
    await em.persistAndFlush(ACTIVE_PROFIT_2);
    await em.persistAndFlush(INACTIVE_PROFIT);
  });

  afterAll(() => {
    orm.close(true);
  });

  test('findAndCount with Filter', async () => {
    const [, totalCount] = await em.findAndCount(
      Profit,
      {},
      {
        filters: ['isActive'],
      }
    );
    expect(totalCount).toBe(2);
  });

  test('findAndCount with out Filter', async () => {
    const [, totalCount] = await em.findAndCount(Profit, {
      benefitStatus: 'A',
      createdAt: { $lte: new Date() },
    });
    expect(totalCount).toBe(2);
  });
});
