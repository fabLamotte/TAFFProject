<FlatList
                    data={data}
                    renderItem={(item) => <PointOfInterest item={item.item} />}
                    keyExtractor={item => item.id}
                    />

                    const PointOfInterest = ({item}) => {
                        //     console.log('coordinates ', item.geometry.coordinates)
                        //     return (
                        //         <MapboxGL.PointAnnotation
                        //         id={item.id}
                        //         coordinate={item.geometry.coordinates}>
                        //             <View style={{
                        //                 height: 30,
                        //                 width: 30,
                        //                 backgroundColor: '#00CCCC',
                        //                 borderRadius: 50,
                        //                 borderColor: '#BBBBBB',
                        //                 borderWidth: 30
                        //             }} />
                        //         </MapboxGL.PointAnnotation>
                        //     )
                        // }