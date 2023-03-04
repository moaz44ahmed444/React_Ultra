import React from "react";
import { Link } from "react-router-dom";
import { NavbarSection,Logo,LogoText,UlList,ListItem,Anchor, LinkItem } from "./Style.js"
const Navbar = () => {
  return (
    <NavbarSection>
            
    <div className="container">
        
        <Logo>
            <LogoText>Ultra Profile</LogoText>
        </Logo>
        
       
        
        <UlList>
            <ListItem><LinkItem to="/">Home</LinkItem></ListItem>
            <ListItem><Anchor>Work</Anchor></ListItem>
            <ListItem><Anchor>Portfolio</Anchor></ListItem>
            <ListItem><Anchor>Resume</Anchor></ListItem>
            <ListItem><Anchor>About</Anchor></ListItem>
            <ListItem><LinkItem to="/contact">Contact</LinkItem></ListItem>
        </UlList>
        
    </div>
    
</NavbarSection>
  );
}

export default Navbar;
