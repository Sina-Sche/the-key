import { useQuery } from "@apollo/client";
import {
  ContentNode,
  GET_CONTENT_NODES,
  ContentNodesResponse,
} from "../graphql/getContentNodes";
import placeholderImage from "../assets/placeholder.png";
import { Img, List, ListElement, Title } from "./ContentNodesListStyles";
import { User } from "../types";
import { v4 as uuidv4 } from "uuid";

const ContentNodesList: React.FC<User> = ({ token }) => {
  const { loading, error, data } = useQuery<ContentNodesResponse>(
    GET_CONTENT_NODES,
    {
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Sorry, something went wrong</p>;
  }
  const nodes: ContentNode[] | undefined =
    data?.Admin.Tree.GetContentNodes.edges.map((edge: any) => edge.node);

  return (
    <List>
      {nodes?.map((node: any) => (
        <ListElement key={uuidv4()}>
          <Title>{node.structureDefinition.title}</Title>
          {node.image ? (
            <Img src={node.image.url} alt="lesson" loading="lazy" />
          ) : (
            <Img src={placeholderImage} alt="lesson" loading="lazy" />
          )}
        </ListElement>
      ))}
    </List>
  );
};

export default ContentNodesList;
