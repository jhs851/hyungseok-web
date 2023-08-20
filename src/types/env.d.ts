declare namespace NodeJS {
  interface Process {
    env: {
      DB_HOST: string;
      DB_USER: string;
      DB_PASS: string;
    };
  }
}
