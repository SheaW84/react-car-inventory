const token ="3493914e95e6817b9d557fb7ca53a1f678d7ccfd6cb6b5bd"

export const server_calls = {
    get: async () => {
        const response = await fetch (`https://carcollection-f0ki.onrender.com/api/cars`,
        {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            mode: 'cors'

        });

        if(!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://carcollection-f0ki.onrender.com/api/cars`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if(!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },
    
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://carcollection-f0ki.onrender.com/api/cars/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data),
            
            
        })

        if (!response.ok){
            throw new Error('Failed to update data on Server')
        }
        
        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://carcollection-f0ki.onrender.com/api/cars/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })

        if (!response.ok){
            throw new Error('Failed to delete data on Server')
        }
        
        return;

    }
    
    
}