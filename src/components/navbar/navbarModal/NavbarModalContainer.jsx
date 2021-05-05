import NavbarModal from './NavbarModal'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addClipPad} from '../../../redux/actions/index'
import {useHistory} from 'react-router-dom'

export default function NavbarModalConteiner ({open, handleClose}) {
const {data} = useSelector((state)=> state)
	const dispatch = useDispatch()
	const history = useHistory()
	const [clipPadTitle, setClipPadTitle] = useState(null)
	const onChengeClipPadTitle = (e) => setClipPadTitle(e.target.value)

	const newClipPad = {
		emailSettings: "",
		users: [],
		isPrivate: true,
		columns: []
	}

	const onClickAddClipPad = () => {
		handleClose()
		dispatch(addClipPad({clipPadTitle, newClipPad }))
		history.push(`/clip-board/${clipPadTitle}`)
	}

	return (<NavbarModal open={open} 
		handleClose={handleClose}
		onChengeClipPadTitle={onChengeClipPadTitle}
		onClickAddClipPad={onClickAddClipPad}/>
	)
}