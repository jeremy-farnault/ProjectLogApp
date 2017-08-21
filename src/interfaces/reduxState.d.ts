declare namespace ReduxState {
  interface IRootState {
    me: ServerEntity.IMe,
    container: {
      App: IApp
    }
    entities: {
      accountParties: { [id: string]: ServerEntity.IAccountParty },
      accounts: { [id: string]: ServerEntity.IAccount },
      advisers: { [id: string]: ServerEntity.IAdviser },
      parties: { [id: string]: ServerEntity.IParty }
    }
  }

  interface IApp {
    word: string
  }
}
