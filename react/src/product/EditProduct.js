import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/products/';

const CompEditProduct = () => {
    const [mark, setMark] = useState('')
    const [model, setModel] = useState('')
    const [release, setRelease] = useState('')
    const [stores, setStores] = useState('')
    const [img, setImg] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {mark: mark, model: model, date_release: release, stores: stores, img: img,})
        navigate('/')
    }

    useEffect( () => {
        getProductById()
    }, [])

    const getProductById = async () => {
        const res = await axios.get(URI+id)
        setMark(res.data.mark)
        setModel(res.data.model)
        setRelease(res.data.date_release)
        setStores(res.data.stores)
        setImg(res.data.img)
    }
    
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-10 offset-1 mb-3'>
                    <h1>Actualizar</h1>
                    <form onSubmit={update}>
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

export default CompEditProduct;