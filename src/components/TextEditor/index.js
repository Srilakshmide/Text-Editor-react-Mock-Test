import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Heading,
  BgContainer,
  TextContainer,
  HeadContainer,
  Image,
  EditContainer,
  StylesContainer,
  Button,
  Line,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    console.log(bold)

    return (
      <BgContainer>
        <TextContainer>
          <HeadContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadContainer>
          <EditContainer>
            <StylesContainer>
              <li>
                <Button
                  type="button"
                  data-testid="bold"
                  color={bold}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  data-testid="italic"
                  color={italic}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  data-testid="underline"
                  color={underline}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </StylesContainer>
            <Line />
            <TextArea
              cols={48}
              rows={31}
              boldText={bold}
              italicText={italic}
              underlineText={underline}
            />
          </EditContainer>
        </TextContainer>
      </BgContainer>
    )
  }
}

export default TextEditor
