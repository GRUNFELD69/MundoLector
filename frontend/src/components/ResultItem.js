import React from "react";
import { Stack, Image } from "react-bootstrap";
import { GeoAlt, Briefcase } from "react-bootstrap-icons";

const ResultItem = (props) => {
  const { bookData } = props;
  return (
    <Stack gap={4} direction="horizontal">
      <Image
        src={bookData.photoPortada}
        roundedCircle
        width="60px"
        height="60px"
      />
      <div>
        <h5>{bookData.Autor}</h5>
        <h5>{bookData.Titulo}</h5>

        <Stack gap={2} direction="horizontal">
          <GeoAlt />
          <div>{bookData.Categoria}</div>
        </Stack>

        <Stack gap={2} direction="horizontal">
          <Briefcase />
          <div>{bookData.Editorial}</div>
        </Stack>

        <Stack gap={2} direction="horizontal">
          <Briefcase />
          <div>{bookData.unDisp}</div>
        </Stack>        
      </div>
    </Stack>
  );
};

export default ResultItem;
