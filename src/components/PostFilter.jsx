import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";


const PostFilter = ({filter, setFilter}) =>{
    return (
        <div>
          <MyInput
            value={filter.query}
            onChange={(e) => setFilter({...filter, query: e.target.value})}
            placeholder="Поиск..."
          />
          <MySelect
            option={[
              {id: 1, value: 'title', name: 'По названию'},
              {id: 2, value: 'body', name: 'По описанию'}
            ]}
            defaultValue="Сортировка"
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          />
        </div>
    )
}

export default PostFilter;