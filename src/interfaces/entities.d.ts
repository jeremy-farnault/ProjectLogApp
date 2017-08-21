declare namespace ServerEntity {
  interface IMe {
    user: {
      userId: string,
      login: string
    },
    advisers: string[],
    parties: string[],
    preferences: {
      toggle: {
        home: boolean,
        search: boolean,
        watchlist: boolean,
        instrumentPages: boolean,
        marketData: boolean,
        documents: boolean
      }
    },
    accountParties: string[],
    accounts: string[],
  }

  type IAdviser = any // fixme
  type IParty = any // fixme
  type IAccount = any // fixme
  type IAccountParty = any // fixme
}
