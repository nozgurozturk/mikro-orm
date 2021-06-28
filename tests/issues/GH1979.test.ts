import {
  Entity,
  MikroORM,
  PrimaryKey,
  Property,
  Filter,
  Index,
} from "@mikro-orm/core";
import { AbstractSqlDriver, EntityManager } from "@mikro-orm/knex";

@Entity({ discriminatorColumn: "type", abstract: true })
@Filter({
  name: "isActive",
  cond: { benefitStatus: "A", createdAt: { $lte: new Date() } },
})
abstract class Benefit {
  @PrimaryKey()
  id!: number;

  @Property()
  benefitStatus!: string;

  @Index()
  @Property({ columnType: "timestamp" })
  createdAt: Date = new Date();

  @Property()
  type!: string;
}

@Entity({
  discriminatorValue: "Profit",
})
class Profit extends Benefit {
  @Property()
  title!: string;
}

@Filter({
  name: "isActiveLost",
  cond: { lostStatus: "L", createdAt: { $lte: new Date() } },
})
@Entity()
class Lost {
  @PrimaryKey()
  id!: number;

  @Property()
  lostStatus!: string;

  @Property()
  title!: string;

  @Index()
  @Property({ columnType: "timestamp" })
  createdAt: Date = new Date();
}

describe("GH issue 1979", () => {
  let orm: MikroORM<AbstractSqlDriver>;

  let em: EntityManager;

  beforeEach(async () => {
    orm = await MikroORM.init({
      entities: [Benefit, Profit, Lost],
      dbName: `mikro_orm_test_gh_1979`,
      type: "postgresql",
      debug: true,
    });

    await orm.getSchemaGenerator().ensureDatabase();
    await orm.getSchemaGenerator().dropSchema();
    await orm.getSchemaGenerator().createSchema();

    em = orm.em.fork();

    const now = Date.now();

    const ACTIVE_PROFIT_1 = new Profit();
    ACTIVE_PROFIT_1.id = 1;
    ACTIVE_PROFIT_1.benefitStatus = "A";
    ACTIVE_PROFIT_1.createdAt = new Date(now - 320000);
    ACTIVE_PROFIT_1.title = "PROFIT_A";
    const ACTIVE_PROFIT_2 = new Profit();
    ACTIVE_PROFIT_2.id = 2;
    ACTIVE_PROFIT_2.benefitStatus = "A";
    ACTIVE_PROFIT_2.createdAt = new Date(now - 320000);
    ACTIVE_PROFIT_1.title = "PROFIT_B";
    const INACTIVE_PROFIT = new Profit();
    INACTIVE_PROFIT.id = 3;
    INACTIVE_PROFIT.benefitStatus = "B";
    INACTIVE_PROFIT.createdAt = new Date(now + 320000);
    ACTIVE_PROFIT_1.title = "PROFIT_C";

    const ACTIVE_LOST_1 = new Lost();
    ACTIVE_LOST_1.id = 1;
    ACTIVE_LOST_1.lostStatus = "L";
    ACTIVE_LOST_1.createdAt = new Date(now - 320000);
    ACTIVE_LOST_1.title = "Lost_A";
    const ACTIVE_LOST_2 = new Lost();
    ACTIVE_LOST_2.id = 2;
    ACTIVE_LOST_2.lostStatus = "L";
    ACTIVE_LOST_2.createdAt = new Date(now - 320000);
    ACTIVE_LOST_2.title = "Lost_B";
    const INACTIVE_LOST = new Lost();
    INACTIVE_LOST.id = 3;
    INACTIVE_LOST.lostStatus = "X";
    INACTIVE_LOST.createdAt = new Date(now + 320000);
    INACTIVE_LOST.title = "Lost_C";

    await em.persistAndFlush(ACTIVE_PROFIT_1);
    await em.persistAndFlush(ACTIVE_PROFIT_2);
    await em.persistAndFlush(INACTIVE_PROFIT);
    await em.persistAndFlush(ACTIVE_LOST_1);
    await em.persistAndFlush(ACTIVE_LOST_2);
    await em.persistAndFlush(INACTIVE_LOST);
  });

  afterAll(() => {
    orm.close(true);
  });

  test("findAndCount with Filter (benefit)", async () => {
    const [, totalCount] = await em.findAndCount(
      Profit,
      {},
      {
        filters: ["isActive"],
      }
    );
    expect(totalCount).toBe(2);
  });

  test("findAndCount with out Filter (benefit)", async () => {
    const [, totalCount] = await em.findAndCount(Profit, {
      benefitStatus: "A",
      createdAt: { $lte: new Date() },
    });
    expect(totalCount).toBe(2);
  });

  test("findAndCount with Filter (lost)", async () => {
    const [, totalCount] = await em.findAndCount(
      Lost,
      {},
      {
        filters: ["isActiveLost"],
      }
    );
    expect(totalCount).toBe(2);
  });

  test("findAndCount with out Filter (lost)", async () => {
    const [, totalCount] = await em.findAndCount(Lost, {
      lostStatus: "L",
      createdAt: { $lte: new Date() },
    });
    expect(totalCount).toBe(2);
  });
});
