using HotChocolate.Language;
using HotChocolate.Types;
using HotChocolate;

public sealed class GenericScalarType : ScalarType
{
    public GenericScalarType()
        : base("GenericScalar")
    {
        Description = "A generic scalar type that can handle various object types";
    }

    // Define the .NET runtime type for this scalar
    public override Type RuntimeType => typeof(object);

    // Check if the syntax node is a valid representation of this scalar
    public override bool IsInstanceOfType(IValueNode valueSyntax)
    {
        if (valueSyntax is StringValueNode || valueSyntax is NullValueNode)
        {
            return true;
        }

        return false;
    }

    // Parse the syntax node to a .NET runtime value
    public override object ParseLiteral(IValueNode valueSyntax)
    {
        return valueSyntax switch
        {
            StringValueNode stringValueNode => stringValueNode.Value,
            NullValueNode => null!,
            _ => throw new SerializationException(
                "GenericScalar only supports string or null values.",
                this)
        };
    }

    // Convert the runtime value to a syntax node
    public override IValueNode ParseValue(object? runtimeValue)
    {
        if (runtimeValue == null)
        {
            return NullValueNode.Default;
        }

        if (runtimeValue is string stringValue)
        {
            return new StringValueNode(stringValue);
        }

        throw new SerializationException(
            "GenericScalar only supports string or null values.",
            this);
    }

    // Convert the result value to a syntax node
    public override IValueNode ParseResult(object? resultValue)
    {
        return ParseValue(resultValue);
    }

    // Serialize the runtime value to a result value
    public override bool TrySerialize(object? runtimeValue, out object? resultValue)
    {
        resultValue = runtimeValue?.ToString();
        return true;
    }

    // Deserialize the result value back into a runtime value
    public override bool TryDeserialize(object? resultValue, out object? runtimeValue)
    {
        runtimeValue = resultValue;
        return true;
    }
}
