import React, {ReactNode} from 'react';

interface ListProps<T> {
  items: T[] | any;
  renderItem: (item: T) => ReactNode
}

export default function List<T>(props: ListProps<T>) {
  return (
    <ul>
      {props.items.map(props.renderItem)}
    </ul>
  )
}