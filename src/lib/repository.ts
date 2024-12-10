import { Pool, PoolClient } from "pg";
import { config } from "../config/index";

const pool = new Pool({
  connectionString: config.DB_URL,
});

export class Repository {
  constructor(private pool: Pool) {}

  async single<TData, TArg>(
    SQL: string,
    ...args: Array<TArg>
  ): Promise<TData | undefined> {
    const client: PoolClient = await this.pool.connect();

    try {
      const {
        rows: [row],
      } = await client.query(SQL, args);

      return row;
    } finally {
      client.release();
    }
  }

  async multiple<TData, TArg>(
    SQL: string,
    ...args: Array<TArg>
  ): Promise<Array<TData>> {
    const client: PoolClient = await this.pool.connect();

    try {
      const { rows } = await client.query(SQL, args);

      return rows;
    } finally {
      client.release();
    }
  }
}

export const repository = new Repository(pool);
