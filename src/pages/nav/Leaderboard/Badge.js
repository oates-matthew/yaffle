import styled from "@emotion/styled";
import { Tooltip } from "@mui/material";
const Badge = (props) => {
    const club = props.club;

    const BadgeHolder = styled.img`
    height:30px;
    width: auto;
    margin: 1px;
    margin-right: 7px;
    `

    const url = props.url;
    return (
        <Tooltip title={club.Name}>
        <BadgeHolder src={club.Badge}/>
        </Tooltip>
    );
}

export default Badge;