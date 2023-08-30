import React from "react";
import {Card, Select, Typography} from "antd";
import {DefaultOptionType} from "antd/es/select";
import {Category, Platform, SortGameBy} from "../../models/game.model";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {filtersSlice} from "../../store/reducers/FiltersSlice";

import styles from "./styles.module.scss";

const {Text} = Typography;

const getOptions = (obj: Record<string, string>) => {
  return Object.entries(obj).map(([key, value]) => ({label: key, value}));
};

const platformOptions: DefaultOptionType[] = getOptions(Platform);
const categoryOptions: DefaultOptionType[] = getOptions(Category);
const sortOptions: DefaultOptionType[] = getOptions(SortGameBy);

const FiltersPanel = () => {
  const {platform, sortBy, tags} = useAppSelector(
    (state) => state.filterReducer,
  );
  const {changePlatform, changeCategories, changeSortBy} = filtersSlice.actions;
  const dispatch = useAppDispatch();

  const handlePlatformChange = (value: Platform) => {
    dispatch(changePlatform(value));
  };
  const handleCategoryChange = (value: Category[]) => {
    dispatch(changeCategories(value));
  };
  const handleSortByChange = (value: SortGameBy) => {
    dispatch(changeSortBy(value));
  };

  return (
    <Card size="small" className={styles.filtersCard}>
      <div className={styles.filters}>
        <Text>Filters:</Text>
        <Select
          options={platformOptions}
          value={platform}
          onChange={handlePlatformChange}
          placeholder="Platform"
          allowClear
        />
        <Select
          options={categoryOptions}
          value={tags}
          onChange={handleCategoryChange}
          placeholder="Category"
          mode="multiple"
          allowClear
        />
        <Text>Sort by:</Text>
        <Select
          options={sortOptions}
          value={sortBy}
          onChange={handleSortByChange}
          placeholder="Sort"
          allowClear
        />
      </div>
    </Card>
  );
};

export default FiltersPanel;
