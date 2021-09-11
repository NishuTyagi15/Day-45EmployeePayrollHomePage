window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Nane</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>
                <img class="profile" src="${empPayrollData._profilePic}" alt="">
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img id="1" onclick="remove(this)"
                    src="/assets/icons/delete-black-18dp.svg"
                    alt="delete">
                <img id="1" onclick="update(this)"
                    src="/assets/icons/create-black-18dp.svg" alt="edit">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Nishu Tyagi',
            _gender: 'Female',
            _department: [
                'Engineer', 
                'HR'
            ],
            _salary: '500000',
            _startDate: '02 Aug 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/assets/profile-images/Ellipse -7.png'
        },
        {
            _name: 'Krati Gupta',
            _gender: 'Female',
            _department: [
                'Engineer', 
                'Sales'
            ],
            _salary: '600000',
            _startDate: '20 July 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/assets/profile-images/Ellipse -1.png'
        },
        {
            _name: 'Shivam Tyagi',
            _gender: 'Male',
            _department: [
                'Engineer', 
                'Finance'
            ],
            _salary: '700000',
            _startDate: '01 Oct 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/assets/profile-images/Ellipse -8.png'
        }
    ];
    return empPayrollListLocal; 
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    if (typeof deptList == 'string') {
        deptHtml = `${deptHtml} <div class="dept-label">${deptList}</div>`
        return deptHtml;
    }
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}