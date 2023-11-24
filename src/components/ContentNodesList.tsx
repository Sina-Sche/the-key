import { useQuery } from "@apollo/client";
import {
  ContentNode,
  GET_CONTENT_NODES,
  ContentNodesResponse,
} from "../graphql/getContentNodes";
import placeholderImage from "../assets/placeholder.png";
import { Img, List, ListElement, Title } from "./ContentNodesListStyles";
import { v4 as uuidv4 } from "uuid";
import { LoadingOverlay, LoadingSpinner } from "./LoadingOverlay";
import { LogoutButton } from "./Logout";
import LazyImage from "./LazyImage";

const ContentNodesList: React.FC = () => {
  const token = localStorage.getItem("token");
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
  if (loading) {
    return (
      <LoadingOverlay data-testid="loadingOverlay">
        <LoadingSpinner />
      </LoadingOverlay>
    );
  }
  if (error) {
    console.error(error);
  }
  const nodes: ContentNode[] | undefined =
    data?.Admin.Tree.GetContentNodes.edges.map((edge: any) => edge.node);

  return (
    <>
      <List>
        {nodes?.map((node: any) => (
          <ListElement key={uuidv4()}>
            <Title>{node.structureDefinition.title}</Title>
            {node.image ? (
              <LazyImage src={node.image.url} alt="lesson" />
            ) : (
              <LazyImage src={placeholderImage} alt="lesson" />
            )}
          </ListElement>
        ))}
        {nodes?.map((node: any, index) => (
          <ListElement key={uuidv4()}>
            <Title>{node.structureDefinition.title}</Title>
            <LazyImage
              src={`https://picsum.photos/id/${index + 1}/180/97`}
              alt="lesson"
            />
          </ListElement>
        ))}
      </List>
      <LogoutButton />
    </>
  );
};

export default ContentNodesList;
