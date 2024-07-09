"use client"

import React, { useEffect } from 'react'
import { DataTable } from '../../../Tables/data-table';
import { columnsMakerz } from '../../../Tables/columns';
import { useFetchMakerzTasks } from '@/hooks/useFetchMakerzTasks';

type FetchMakerzTasksProps = {
  username: string;
}

const FetchMakerzTasks = ({username}: FetchMakerzTasksProps) => {
  const { tasks, error, fetchMakerzTasks } = useFetchMakerzTasks(username);

  useEffect(() => {
    fetchMakerzTasks();
  }, []);

  const data = tasks || [];

  return (
    <DataTable tableType="makerz" data={data} columns={columnsMakerz} />
  )
}

export default FetchMakerzTasks