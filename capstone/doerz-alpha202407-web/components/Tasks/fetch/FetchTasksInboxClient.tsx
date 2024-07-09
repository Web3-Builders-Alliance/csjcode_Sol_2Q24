"use client"
import { useFetchTasks } from '@/hooks/useFetchTasks';
import React, { useEffect } from 'react'
import { DataTable } from '../../Tables/data-table';
import { columns } from '../../Tables/columns';

type FetchTasksInboxClientProps = {}

const FetchTasksInboxClient = (props: FetchTasksInboxClientProps) => {
  const { tasks, error, fetchTasks } = useFetchTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  const data = tasks || [];

  return (
    <DataTable data={data} columns={columns} />
  )
}

export default FetchTasksInboxClient