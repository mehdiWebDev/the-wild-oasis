import supabase from './supabase'
export const getCabins = async () => {
    let { data, error } = await supabase
    .from('cabins')
    .select('*')

    if (error) {
        console.error('Error fetching cabins:', error);
        return [];
    }
    return data;
}

export const deleteCabin = async (cabinId) => {
    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', cabinId);

    if (error) {
        console.error('Error deleting cabin:', error);
        return null;
    }
    return data;
}