import styled from 'styled-components';
import { ChangeEvent, Component } from 'react';
import { LOCAL_STORAGE_KEYS, LocalStorageUtils } from '../utils';

const Card = styled.div`
  padding: 30px 50px;
  background-color: #4c5a65;
  margin: 0 auto;
  max-width: 80%;
  border-radius: 20px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: 6px;
  justify-content: center;
  width: 100%;
`;

const SearchBarButton = styled.button`
  padding: 0 22px;
  text-align: center;
  text-transform: uppercase;
  background-color: #fff;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: #e0e0e0;
  }
`;

const SearchBarInputWrapper = styled(Wrapper)`
  padding: 8px 10px;
  background-color: #fff;
  border-radius: 4px;
  width: 100%;
`;

const SearchBarInput = styled.input`
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  height: 20px;
  background-color: transparent;
  width: 100%;

  &::placeholder {
    color: #fff;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

interface State {
  value: string;
}

interface Props {
  search?: (value: string) => void;
}

export default class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: LocalStorageUtils.GetValueByKey(LOCAL_STORAGE_KEYS.SEARCH_INPUT, ''),
    };
  }

  componentDidMount() {
    this.search();
  }

  componentWillUnmount() {
    LocalStorageUtils.SetValueByKey(LOCAL_STORAGE_KEYS.SEARCH_INPUT, this.state.value);
  }

  search = () => {
    this.props.search?.(this.state.value);
  };

  setValue = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value });
  };

  render() {
    return (
      <Card>
        <Wrapper>
          <SearchBarInputWrapper>
            <label style={{ color: '#e0e0e0' }} htmlFor="search-input">
              SearchIcon
            </label>
            <SearchBarInput
              id="search-input"
              value={this.state.value}
              onChange={this.setValue}
              placeholder="search"
              type="text"
            />
          </SearchBarInputWrapper>
          <SearchBarButton onClick={this.search}>SEARCH</SearchBarButton>
        </Wrapper>
      </Card>
    );
  }
}
