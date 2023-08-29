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
  const {changePlatform} = filtersSlice.actions;
  const dispatch = useAppDispatch();

  const handlePlatformChange = (
    value: Platform,
    option: DefaultOptionType | DefaultOptionType[],
  ) => {
    dispatch(changePlatform(value));
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
        />
        <Select
          options={categoryOptions}
          placeholder="Category"
          mode="multiple"
        />
        <Text>Sort by:</Text>
        <Select options={sortOptions} placeholder="Sort" />
      </div>
    </Card>
  );
};

export default FiltersPanel;
