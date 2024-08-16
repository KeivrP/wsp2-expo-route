  export type User = {
    id: string,
    status?: string,
    image: string,
    name: string
  }

  export type lastMessage = {
    id: string,
    text: string,
    createdAt: string
  }

  export type ChatsList = {
    id: string
    user: User
    lastMessage: lastMessage
  }

  export type Message = {
    id: string
    text: string
    createdAt: string
    user: {
      id: string
      name: string
    }

  }
