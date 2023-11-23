import { gql } from "@apollo/client";

export interface ContentNode {
  id: string;
  image: {
    thumbnail: string;
    name: string;
    url: string;
  };
  structureDefinition: {
    title: string;
  };
}

export interface ContentNodesResponse {
  Admin: {
    Tree: {
      GetContentNodes: {
        edges: {
          node: ContentNode;
        }[];
      };
    };
  };
}

export const GET_CONTENT_NODES = gql`
  query AdminTreeGetContentNodes {
    Admin {
      Tree {
        GetContentNodes {
          edges {
            node {
              id
              image {
                thumbnail
                name
                url
              }
              structureDefinition {
                ... on ChildStructureDefinition {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;
