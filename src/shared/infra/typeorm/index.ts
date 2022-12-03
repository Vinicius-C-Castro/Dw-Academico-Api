import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'dw_alunos'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: 'localhost',
      database:
        process.env.NODE_ENV === 'test'
          ? 'dw_alunos_test'
          : defaultOptions.database,
    }),
  );
};
