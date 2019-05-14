/** @jsx h */

// eslint-disable-next-line arrow-body-style
const ListArray = (props) => {
  return !props.normalized ? null : props.normalized.map((row) => {
    const label = row.length === 2
      ? row[0]
      : null;
    const items = row.length === 2
      ? row[1]
      : row[0];

    if (!label) {
      return (items.map(
        item => (
          <option
            value={ item.value }
            disabled={ item.disabled }>
            { item.title }
          </option>)));
    }
    else {
      return (
        <optgroup label={ label }>
        {
          items.map(
            item => (
              <option
                value={ item.value }
                disabled={ item.disabled }>
                { item.title }
              </option>))
        }
        </optgroup>
      );
    }
  });
};

export default ListArray;
