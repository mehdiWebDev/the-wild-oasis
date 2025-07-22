import Heading from "../ui/Heading";
import Row from "../ui/Row";

import { useEffect } from "react";
import  getCabins from "../services/apiCabins";

function Cabins() {

  // const [cabins, setCabins] = useState([]);
  useEffect(() => {
    getCabins()
      .then(cabins => {
        console.log('Cabins fetched:', cabins);
        // setCabins(cabins);
      })
      .catch(error => {
        console.error('Error fetching cabins:', error);
      }
    );
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
