import { useContext } from 'react'
import { CartContext } from '../../Context/ContextProvider'

const Search = () => {
    const { updateState} = useContext(CartContext)
  return (
    <div>
        <input 
        placeholder='Search products...'
        type="text"
        className='rounded-lg p-1 px-4 border border-black focus:outline-none'
        onChange={(e) => updateState({
            searchProduct: e.target.value
        })}
        />
    </div>
  )
}

export default Search