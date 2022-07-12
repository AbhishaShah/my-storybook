import Button from "../components/Button";

export default {
    title:"Button",
    component: Button
}

export const Primary = () => <Button label="I'm Primary Button" backgroundColor="blue"/>

export const Danger = () => <Button label="I'm Danger Button"  backgroundColor="red" size="lg"/>