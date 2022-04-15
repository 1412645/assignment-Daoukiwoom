import React from "react";
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const TopBar = () => {
  return (
    <TopBarContainer className="topbar">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value="en"
          label="Language"
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="vn">VN</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value="company"
          label="Company"
        >
          <MenuItem value="company">Company</MenuItem>
          <MenuItem value="company 1">Company 1</MenuItem>
          <MenuItem value="company 2">Company 2</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value="market"
          label="Market"
        >
          <MenuItem value="market">Partner Market Place</MenuItem>
          <MenuItem value="market 1">Partner Market Place 1</MenuItem>
          <MenuItem value="market 2">Partner Market Place 2</MenuItem>
        </Select>
      </FormControl>
    </TopBarContainer>
  )
}

const TopBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 36px;
  background: #181949;
  color: #FFFFFF;
  padding-right: 150px;
`

export default TopBar;