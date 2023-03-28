def get_sub_eq(eq_str):
    st = []
    res = []

    for i, x in enumerate(eq_str):
        if x == "(":
            st.append(i)
        elif x == ")":
            res.append(eq_str[st.pop() + 1:i])

    return res


s = "2 + 3 * (1 - 5 - (3 * x - 5)) + (a - b)"
res = get_sub_eq(s)
print(res)