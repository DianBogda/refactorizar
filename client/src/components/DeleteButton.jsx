import axios from 'axios';
import {Button} from '@material-ui/core';

const DeleteButton = props => {

    const {productId, succesCallback} = props;

    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/producto/delete/' + productId)
            .then(res => {
                succesCallback(productId);
            })
    }

    return(
        <Button variant="contained" size="small" color="secondary" onClick={deleteProduct}>
            Delete
        </Button>
    )
}

export default DeleteButton;