import Button from "../components/Button";

export default {
    title:"Button",
    component: Button,
    argTypes:{ handleClick : {action: "handleClick"} }, // only neede by storyybook
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({}) 
Primary.args = { // here arg is the props required for our component
    label:"I'm Primary Button", 
    backgroundColor:"blue",
    size:"sm"
}

export const Danger = Template.bind({}) 
Danger.args = {
    label:"I'm Danger Button", 
    backgroundColor:"red",
    size:"lg"
}