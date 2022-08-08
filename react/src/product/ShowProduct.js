import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import 'react-data-table-component-extensions/dist/index.css';

const URI = 'http://localhost:8000/products/';

const CompShowProducts = () => {
    const [products, setProduct] = useState([]);
    useEffect( () => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const res = await axios.get(URI);
        setProduct(res.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${URI}${id}`);
        getProducts();
    }

    const columns = [
        {
            name: 'Marca',
            selector: row => row.mark,
            sortable: true,
        },
        {
            name: 'Modelo',
            selector: row => row.model,
            sortable: true,
        },
        {
            name: 'Fecha Lanzamiento',
            selector: row => row.date_release,
            sortable: true,
        },
        {
            name: 'Tiendas',
            selector: row => row.stores,
            sortable: true,
        },
        {
            name: 'Imagen',
            cell: (row) => <img className='img-fluid producto' src={row.img} />,
            selector: row => row.img,
            sortable: true,
        },
        {
				
            cell: (row) => <button onClick={() =>  deleteProduct(row.id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
				
            cell: (row) => <Link to={`/edit/${row.id}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/create' className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-plus"></i></Link>
                    <DataTableExtensions
                      filterPlaceholder="Buscar"
                      columns={columns}
                      data={products}
                      print={false}
                      export={false}
                    >
                       <DataTable
                        title="Listado de Nuevos Calzados"
                        columns={columns}
                        data={products}
                        pagination
                        highlightOnHover
                        fixedHeader
                        responsive
                       />
                    </DataTableExtensions>
                </div>
            </div>
        </div>
    )
}

export default CompShowProducts;