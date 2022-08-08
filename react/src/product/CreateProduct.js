import axios from 'axios'
import {useState, } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/products/';

const CompCreateProduct = () => {
    const [mark, setMark] = useState('')
    const [model, setModel] = useState('')
    const [release, setRelease] = useState('')
    const [stores, setStores] = useState('')
    const [img, setImg] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault() 
        await axios.post(URI, {mark: mark, model: model, date_release: release, stores: stores, img: img,})
        navigate('/')
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-10 offset-1 mb-3'>
                    <h1>Nuevos Zapatos</h1>
                    <form onSubmit={store}>
                        <div className='mb-3'>
                            <label className='form-label'>Marca</label>
                            <input 
                                value={mark}
                                onChange={ (e) => setMark(e.target.value )}
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Modelo</label>
                            <input 
                                value={model}
                                onChange={ (e) => setModel(e.target.value )}
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Fecha de Lanzamiento</label>
                            <input 
                                value={release}
                                onChange={ (e) => setRelease(e.target.value )}
                                type='date'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Link Imagen</label>
                            <input 
                                value={img}
                                onChange={ (e) => setImg(e.target.value )}
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Tiendas</label>
                            <textarea 
                                value={stores}
                                onChange={ (e) => setStores(e.target.value )}
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default CompCreateProduct; 