class ShoppingList extends React.Component {
  render(callback) {
    return (
      <div className="shopping-list">
        <button id="button" onClick={() => callback()}></button>
      </div>
    );
  }
}

module.exports = [ShoppingList];
