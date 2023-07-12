interface MyIconProps {
    name: string;
    path: string;
    height?: string;
}

const MyIcon = (props: MyIconProps) => {
    return (
        <img src={props.path} alt={props.name} style={{ height: '1.5rem' }} />
    );
};


export default MyIcon;