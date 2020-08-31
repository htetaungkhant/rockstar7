import React from 'react';

const styles = {
    list: {
        background: 'red',
        padding: 10
    }
}

class List extends React.Component{
    render(){
        return(
            <ul style = {styles.list}>
                {this.props.children}
            </ul>
        );
    }
}

export default List;