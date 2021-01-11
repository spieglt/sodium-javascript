/* eslint-disable camelcase */

// crypto_pwhash_argon2i.h
const crypto_pwhash_argon2i_ALG_ARGON2I13 = 1
const crypto_pwhash_argon2i_BYTES_MIN = 16
const crypto_pwhash_argon2i_BYTES_MAX = SODIUM_MIN(SODIUM_SIZE_MAX, 4294967295)
const crypto_pwhash_argon2i_PASSWD_MIN = 0
const crypto_pwhash_argon2i_PASSWD_MAX = 4294967295
const crypto_pwhash_argon2i_SALTBYTES = 16
const crypto_pwhash_argon2i_STRBYTES = 128
const crypto_pwhash_argon2i_STRPREFIX = "$argon2i$"
const crypto_pwhash_argon2i_OPSLIMIT_MIN = 3
const crypto_pwhash_argon2i_OPSLIMIT_MAX = 4294967295
const crypto_pwhash_argon2i_MEMLIMIT_MIN = 8192
const crypto_pwhash_argon2i_MEMLIMIT_MAX = ((SIZE_MAX >= 4398046510080) ? 4398046510080 : (SIZE_MAX >= 2147483648) ? 2147483648 : 32768)
const crypto_pwhash_argon2i_OPSLIMIT_INTERACTIVE = 4
const crypto_pwhash_argon2i_MEMLIMIT_INTERACTIVE = 33554432
const crypto_pwhash_argon2i_OPSLIMIT_MODERATE = 6
const crypto_pwhash_argon2i_MEMLIMIT_MODERATE = 134217728
const crypto_pwhash_argon2i_OPSLIMIT_SENSITIVE = 8
const crypto_pwhash_argon2i_MEMLIMIT_SENSITIVE = 536870912

// crypto_pwhash_argon2id.h
const crypto_pwhash_argon2id_ALG_ARGON2ID13 = 2
const crypto_pwhash_argon2id_BYTES_MIN = 16
const crypto_pwhash_argon2id_BYTES_MAX = SODIUM_MIN(SODIUM_SIZE_MAX, 4294967295)
const crypto_pwhash_argon2id_PASSWD_MIN = 0
const crypto_pwhash_argon2id_PASSWD_MAX = 4294967295
const crypto_pwhash_argon2id_SALTBYTES = 16
const crypto_pwhash_argon2id_STRBYTES = 128
const crypto_pwhash_argon2id_STRPREFIX = "$argon2id$"
const crypto_pwhash_argon2id_OPSLIMIT_MIN = 1
const crypto_pwhash_argon2id_OPSLIMIT_MAX = 4294967295
const crypto_pwhash_argon2id_MEMLIMIT_MIN = 8192
const crypto_pwhash_argon2id_MEMLIMIT_MAX = ((SIZE_MAX >= 4398046510080) ? 4398046510080 : (SIZE_MAX >= 2147483648) ? 2147483648 : 32768)
const crypto_pwhash_argon2id_OPSLIMIT_INTERACTIVE = 2
const crypto_pwhash_argon2id_MEMLIMIT_INTERACTIVE = 67108864
const crypto_pwhash_argon2id_OPSLIMIT_MODERATE = 3
const crypto_pwhash_argon2id_MEMLIMIT_MODERATE = 268435456
const crypto_pwhash_argon2id_OPSLIMIT_SENSITIVE = 4
const crypto_pwhash_argon2id_MEMLIMIT_SENSITIVE = 1073741824

// crypto_pwhash.h
const crypto_pwhash_ALG_ARGON2I13 = crypto_pwhash_argon2i_ALG_ARGON2I13
const crypto_pwhash_ALG_ARGON2ID13 = crypto_pwhash_argon2id_ALG_ARGON2ID13
const crypto_pwhash_ALG_DEFAULT = crypto_pwhash_ALG_ARGON2ID13
const crypto_pwhash_BYTES_MIN = crypto_pwhash_argon2id_BYTES_MIN
const crypto_pwhash_BYTES_MAX = crypto_pwhash_argon2id_BYTES_MAX
const crypto_pwhash_PASSWD_MIN = crypto_pwhash_argon2id_PASSWD_MIN
const crypto_pwhash_PASSWD_MAX = crypto_pwhash_argon2id_PASSWD_MAX
const crypto_pwhash_SALTBYTES = crypto_pwhash_argon2id_SALTBYTES
const crypto_pwhash_STRBYTES = crypto_pwhash_argon2id_STRBYTES
const crypto_pwhash_STRPREFIX = crypto_pwhash_argon2id_STRPREFIX
const crypto_pwhash_OPSLIMIT_MIN = crypto_pwhash_argon2id_OPSLIMIT_MIN
const crypto_pwhash_OPSLIMIT_MAX = crypto_pwhash_argon2id_OPSLIMIT_MAX
const crypto_pwhash_MEMLIMIT_MIN = crypto_pwhash_argon2id_MEMLIMIT_MIN
const crypto_pwhash_MEMLIMIT_MAX = crypto_pwhash_argon2id_MEMLIMIT_MAX
const crypto_pwhash_OPSLIMIT_INTERACTIVE = crypto_pwhash_argon2id_OPSLIMIT_INTERACTIVE
const crypto_pwhash_MEMLIMIT_INTERACTIVE = crypto_pwhash_argon2id_MEMLIMIT_INTERACTIVE
const crypto_pwhash_OPSLIMIT_MODERATE = crypto_pwhash_argon2id_OPSLIMIT_MODERATE
const crypto_pwhash_MEMLIMIT_MODERATE = crypto_pwhash_argon2id_MEMLIMIT_MODERATE
const crypto_pwhash_OPSLIMIT_SENSITIVE = crypto_pwhash_argon2id_OPSLIMIT_SENSITIVE
const crypto_pwhash_MEMLIMIT_SENSITIVE = crypto_pwhash_argon2id_MEMLIMIT_SENSITIVE
const crypto_pwhash_PRIMITIVE = "argon2i"


const crypto_pwhash_ALG_ARGON2I13 = crypto_pwhash_argon2i_ALG_ARGON2I13

////////////////

function crypto_pwhash_alg_argon2i13() {
    return crypto_pwhash_ALG_ARGON2I13
}

function crypto_pwhash_alg_argon2id13() {
    return crypto_pwhash_ALG_ARGON2ID13
}

function crypto_pwhash_alg_default() {
    return crypto_pwhash_ALG_DEFAULT
}

function crypto_pwhash_bytes_min() {
    return crypto_pwhash_BYTES_MIN
}

function crypto_pwhash_bytes_max() {
    return crypto_pwhash_BYTES_MAX
}

function crypto_pwhash_passwd_min() {
    return crypto_pwhash_PASSWD_MIN
}

function crypto_pwhash_passwd_max() {
    return crypto_pwhash_PASSWD_MAX
}

function crypto_pwhash_saltbytes() {
    return crypto_pwhash_SALTBYTES
}

function crypto_pwhash_strbytes() {
    return crypto_pwhash_STRBYTES
}

function crypto_pwhash_strprefix() {
    return crypto_pwhash_STRPREFIX
}

function crypto_pwhash_opslimit_min() {
    return crypto_pwhash_OPSLIMIT_MIN
}

function crypto_pwhash_opslimit_max() {
    return crypto_pwhash_OPSLIMIT_MAX
}

function crypto_pwhash_memlimit_min() {
    return crypto_pwhash_MEMLIMIT_MIN
}

function crypto_pwhash_memlimit_max() {
    return crypto_pwhash_MEMLIMIT_MAX
}

function crypto_pwhash_opslimit_interactive() {
    return crypto_pwhash_OPSLIMIT_INTERACTIVE
}

function crypto_pwhash_memlimit_interactive() {
    return crypto_pwhash_MEMLIMIT_INTERACTIVE
}

function crypto_pwhash_opslimit_moderate() {
    return crypto_pwhash_OPSLIMIT_MODERATE
}

function crypto_pwhash_memlimit_moderate() {
    return crypto_pwhash_MEMLIMIT_MODERATE
}

function crypto_pwhash_opslimit_sensitive() {
    return crypto_pwhash_OPSLIMIT_SENSITIVE
}

function crypto_pwhash_memlimit_sensitive() {
    return crypto_pwhash_MEMLIMIT_SENSITIVE
}

function crypto_pwhash(out, outlen, passwd, passwdlen, salt, opslimit, memlimit, alg) {
    // switch (alg) {
    // case crypto_pwhash_ALG_ARGON2I13:
    //     return crypto_pwhash_argon2i(out, outlen, passwd, passwdlen, salt,
    //                                  opslimit, memlimit, alg);
    // case crypto_pwhash_ALG_ARGON2ID13:
    //     return crypto_pwhash_argon2id(out, outlen, passwd, passwdlen, salt,
    //                                   opslimit, memlimit, alg);
    // default:
    //     errno = EINVAL;
    //     return -1;
    // }
    return crypto_pwhash_argon2id(out, outlen, passwd, passwdlen, salt, opslimit, memlimit, alg)
}

function crypto_pwhash_str(out, passwd, passwdlen, opslimit, memlimit) {
    assert(out.byteLength === crypto_pwhash_STRBYTES)
    return crypto_pwhash_argon2id_str(out, passwd, passwdlen, opslimit, memlimit)
}

function crypto_pwhash_str_alg(out, passwd, passwdlen, opslimit, memlimit, alg) {
    // switch (alg) {
    // case crypto_pwhash_ALG_ARGON2I13:
    //     return crypto_pwhash_argon2i_str(out, passwd, passwdlen,
    //                                      opslimit, memlimit);
    // case crypto_pwhash_ALG_ARGON2ID13:
    //     return crypto_pwhash_argon2id_str(out, passwd, passwdlen,
    //                                       opslimit, memlimit);
    // }
    // sodium_misuse();
    // /* NOTREACHED */
    // return -1;
    assert(out.byteLength === crypto_pwhash_STRBYTES)
    return crypto_pwhash_argon2id_str(out, passwd, passwdlen, opslimit, memlimit)
}

int
crypto_pwhash_str_verify(str, passwd, passwdlen) {
    assert(str.byteLength === crypto_pwhash_STRBYTES)
    if (strncmp(str, crypto_pwhash_argon2id_STRPREFIX,
                sizeof crypto_pwhash_argon2id_STRPREFIX - 1) == 0) {
        return crypto_pwhash_argon2id_str_verify(str, passwd, passwdlen);
    }
    if (strncmp(str, crypto_pwhash_argon2i_STRPREFIX,
                sizeof crypto_pwhash_argon2i_STRPREFIX - 1) == 0) {
        return crypto_pwhash_argon2i_str_verify(str, passwd, passwdlen);
    }
    errno = EINVAL;

    return -1;
}

int
crypto_pwhash_str_needs_rehash(const char str[crypto_pwhash_STRBYTES],
                               unsigned long long opslimit, size_t memlimit)
{
    if (strncmp(str, crypto_pwhash_argon2id_STRPREFIX,
                sizeof crypto_pwhash_argon2id_STRPREFIX - 1) == 0) {
        return crypto_pwhash_argon2id_str_needs_rehash(str, opslimit, memlimit);
    }
    if (strncmp(str, crypto_pwhash_argon2i_STRPREFIX,
                sizeof crypto_pwhash_argon2i_STRPREFIX - 1) == 0) {
        return crypto_pwhash_argon2i_str_needs_rehash(str, opslimit, memlimit);
    }
    errno = EINVAL;

    return -1;
}

function crypto_pwhash_primitive() {
    return crypto_pwhash_PRIMITIVE
}
