import Items from '../Items/Items.jsx'

function ListItem({ shoppingList, fetchItem }) {
    return (
        <ul>
            {shoppingList.map(item => {
                return (
                    <Items 
                        key={item.id} 
                        item={item}
                        fetchItem={fetchItem}
                    />
                )
            })}
        </ul>
    )
}

export default ListItem;