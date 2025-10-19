import styled from "styled-components";
import { CardHeader } from "@/src/components/Card/CardHeader/index.styles";
import { CardBody } from "@/src/components/Card/CardBody/index.styles";

export const Card = styled.div`
  padding: 18px;
  width: 300px;
  min-width: 300px;
  height: 416px;
  max-height: 416px;
  background: white;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  & > ${CardHeader} {
    margin-bottom: 48px;
  }

  & > ${CardBody} > * {
    margin-top: 48px;
  }
`;
