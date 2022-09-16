import Items from '../Items/Items.jsx'

function ListItem({ shoppingList }) {
    return (
        <>
            {shoppingList.map(item => {
                return (
                    <Items key={item.id} item={item} />
                )
            })}
        </>
    )
}

export default ListItem;