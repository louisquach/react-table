import React from 'react'
import MaterialTable from 'material-table'

export default function Table() {
    const info = [{ title: 'Name', field: 'name' },
    { title: 'Sure Name', field: 'surname' },
    { title: 'Birth Year', field: 'birthYear'},
    { title: 'Birth Place', field: 'birthCity', lookup: { 6066: 'Ballajura',34: 'İstanbul', 63: 'Şanlıurfa' } }]
    const column = [info.map( item => item)]
    const people = [{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    { name: 'Beo', surname: 'Quach', birthYear: 2018, birthCity: 6066 },
    { name: 'Louis', surname: 'Quach', birthYear: 2018, birthCity: 34 },
    { name: 'Minh', surname: 'Quach', birthYear: 1990, birthCity: 6066 },
    { name: 'Minh', surname: 'Do', birthYear: 1991, birthCity: 6066 },]
    return (
        <MaterialTable
            title="Basic Table"
            columns={
                column[0]
            }
            data={
              people
            }
            actions={[
                {
                  icon: 'save',
                  tooltip: 'Save User',
                  onClick: (event, rowData) => alert("You saved " + rowData.name)
                },
                rowData => ({
                    icon: 'cancel',
                    tooltip: 'Delete',
                    onClick: (event, rowData) => console.log(rowData),
                    disabled: rowData.birthCity !== 6066
                })
              ]}
            options= {{
                actionsColumnIndex: -1,
                headerStyle: {
                    backgroundColor: "green",
                    color: "white",
                    fontSize: "18px"
                },
                rowStyle: {
                    backgroundColor: "lightgrey"
                },
                search: false
            }
        }
            
        />
    )
}
