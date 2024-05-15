'use client'

import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { InvoiceData } from '@/types/invoiceType';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    sectionBetween: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        textDecoration: 'underline',
    },
    content: {
        fontSize: 16,
        marginBottom: 10,
    },
    contentLarge: {
        fontSize: 20,
        marginBottom: 10,
    },
    textSmall: {
        fontSize: 14,
        marginBottom: 5,
    },
    separator: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
});



const generatePDF = async (data: InvoiceData) => {
    const {invoice, product_name, qty, transaction_payment, payment_methode, transaction_status, message} = data
    const {tagihan, total_tagihan} = data?.payment_detail;

    const doc = (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>Invoice</Text>
                    <Text style={styles.contentLarge}>Harap Lengkapi Pembayaran</Text>
                    <Text style={[styles.textSmall, {color: "gray"}]}>Pesanan kamu {invoice} menunggu pembayaran</Text>
                    <View style={{ marginBottom: 20 }} />
                    <View style={styles.separator} />
                    <View style={{ marginBottom: 10 }} />
                    {/* <Text style={styles.textSmall}>{product_name}</Text> */}
                    <Text style={[styles.textSmall, {color: "gray"}]}>Pembelian produk {qty} {product_name}</Text>
                    <View style={{ marginBottom: 20 }} />
                    <Text style={styles.textSmall}>Nickname: Testing</Text>
                    <Text style={styles.textSmall}>ID: 11233445</Text>
                    <Text style={styles.textSmall}>Server: 1234</Text>
                    <View style={{ marginBottom: 20 }} />
                    {/* <View style={styles.separator} /> */}
                    <Text style={[styles.content, {color: "gray"}]}>Rincian Pembayaran</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.textSmall, {color: "gray"}]}>Total Pembayaran</Text>
                        <Text style={styles.textSmall}>Rp. {total_tagihan}</Text>
                    </View>
                    <View style={{ marginBottom: 20 }} />
                    <Text style={styles.content}>Metode Pembayaran</Text>
                    <Text style={[styles.content, {color: "gray"}]}>{payment_methode}</Text>
                    <View style={{ marginBottom: 20 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textSmall}>Nomor Invoice</Text>
                        <Text style={styles.textSmall}>{invoice}</Text>
                    </View>
                    <View style={{ marginBottom: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textSmall}>Status Transaksi</Text>
                        <Text style={styles.textSmall}>{transaction_status}</Text>
                    </View> 
                    <View style={{ marginBottom: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textSmall}>Status Pembayaran</Text>
                        <Text style={styles.textSmall}>{transaction_payment}</Text>
                    </View>
                    <View style={{ marginBottom: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textSmall}>Pesan</Text>
                        <Text style={styles.textSmall}>{message}</Text>
                    </View>
                    <View style={{ marginBottom: 20 }} />
                    <View style={styles.separator} />
                    <View style={{ marginBottom: 20 }} />
                    <Text style={[styles.contentLarge, {textAlign: "center"}]}>MURA GAMES</Text>
                </View>
            </Page>
        </Document>
    );

    const pdfBlob = await pdf(doc).toBlob();
    const fileURL = URL.createObjectURL(pdfBlob);
    window.open(fileURL);
    // window.print();
    // saveAs(pdfBlob, 'invoice.pdf');
};


export default generatePDF;