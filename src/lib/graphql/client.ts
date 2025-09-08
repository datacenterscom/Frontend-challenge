import { GraphQLClient } from "graphql-request";

const API_URL = "https://rickandmortyapi.com/graphql";

/**
 * Creates a GraphQL client for Rick and Morty API
 * Simplified version based on datacenterscom patterns
 */
export function createGraphQLClient(): GraphQLClient {
  return new GraphQLClient(API_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
}

/**
 * Executes a GraphQL query
 * @param query The GraphQL query string
 * @param variables Optional variables for the query
 * @returns The query result
 */
export async function executeQuery<
  TData,
  TVariables extends Record<string, unknown> = Record<string, unknown>,
>(query: string, variables?: TVariables): Promise<TData> {
  try {
    const client = createGraphQLClient();
    return await client.request<TData>(query, variables);
  } catch (error) {
    console.error("GraphQL query error:", error);
    throw error;
  }
}

/**
 * Get the GraphQL client instance
 * Useful for React Query integration
 */
export function getGraphQLClient(): GraphQLClient {
  return createGraphQLClient();
}
