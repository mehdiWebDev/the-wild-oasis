import styled from "styled-components";



const Heading = styled.h1`
    ${(props) => 
        props.as === "h1" && `
            font-size: 2.4rem;`
    }

    ${(props) => 
        props.as === "h2" && `
            font-size: 2rem;`
    }

    ${(props) => 
        props.as === "h3" && `
            font-size: 1.6rem;`
    }

    
`;

export default Heading;