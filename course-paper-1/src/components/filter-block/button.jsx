
export const Button = ({ name, style, onClick }) => {
    return (
        <button className={ style } onClick={ onClick }>
            { name }
        </button>
    );
};