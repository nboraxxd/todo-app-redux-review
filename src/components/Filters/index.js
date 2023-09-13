import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { prioritiesFilterSelector, searchTextSelector, statusFilterSelector } from '../../redux/selector'
import filtersSlice from './filtersSlice'


const { Search } = Input

export default function Filters() {
  const dispatch = useDispatch()
  const searchText = useSelector(searchTextSelector)
  const status = useSelector(statusFilterSelector)
  const priorities = useSelector(prioritiesFilterSelector)

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={(ev) => dispatch(filtersSlice.actions.searchFilterChange(ev.target.value))}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={(ev) => dispatch(filtersSlice.actions.statusFilterChange(ev.target.value))}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
          value={priorities}
          onChange={(ev) => dispatch(filtersSlice.actions.prioritiesFilterChange(ev))}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  )
}
