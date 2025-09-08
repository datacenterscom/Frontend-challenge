export const GET_CHARACTERS = `
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
        }
        location {
          id
          name
          type
          dimension
        }
        image
        created
      }
    }
  }
`;

export const GET_CHARACTER = `
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
      }
      location {
        id
        name
        type
        dimension
      }
      image
      episode {
        id
        name
        air_date
        episode
      }
      created
    }
  }
`;

export const GET_MULTIPLE_CHARACTERS = `
  query GetMultipleCharacters($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      status
      species
      type
      gender
      image
      created
    }
  }
`;
