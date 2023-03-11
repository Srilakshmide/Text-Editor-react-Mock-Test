import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #f8fafc;
  font-weight: 500;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 50px;
`
export const BgContainer = styled.div`
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const TextContainer = styled.div`
  background-color: #1b1c22;
  width: 50%;
  height: 600px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`
export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  width: 100%;
  height: 300px;
  margin-top: 60px;
`
export const EditContainer = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 10px;
  width: 55%;
  height: 560px;
`
export const StylesContainer = styled.ul`
  display: flex;
  padding: 5px;
  list-style-type: none;
`
export const Button = styled.button`
  background-color: transparent;
  margin-right: 20px;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
  border: none;
  outline: none;
  cursor: pointer;
`
export const Line = styled.hr`
  width: 100%;
  border: 1px solid #334155;
  margin-top: 0px;
`
export const TextArea = styled.textarea`
  margin: 10px;
  background-color: transparent;
  padding: 6px;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  outline: none;
  font-weight: ${props => (props.boldText ? 'bold' : 'normal')};
  font-style: ${props => (props.italicText ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underlineText ? 'underline' : 'normal')};
  color: #f8fafc;
`
